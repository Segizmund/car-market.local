<?php
namespace App\Http\Controllers\Slider;

use App\Http\Controllers\Controller;
use App\Models\Slide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SlideController extends Controller
{
    public function index()
    {
        $slides = Slide::all();
        return Inertia::render('Admin/Slides/AllSlides', compact('slides'));
    }
    public function create()
    {
        return Inertia::render('Admin/Slides/Create');
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'nullable|url',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator->errors());
        }

        $path = $request->file('image')->store('slides', 'public');
        $path = '/storage/' . $path;

        Slide::create([
            'image' => $path,
            'url' => $request->input('url'),
        ]);

        return back()->with('success', 'Слайд успешно добавлен');
    }
    public function edit(Slide $slide)
    {
        return Inertia::render('Admin/Slides/Edit', [
            'slide' => $slide,
        ]);
    }
    public function update(Request $request, Slide $slide)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'url' => 'nullable|url',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator->messages());
        }

        // Подготавливаем данные для обновления
        $data = $request->only(['url']);

        // Если загружено новое изображение — заменяем старое
        if ($request->hasFile('image')) {
            // Удаляем старое изображение
            if ($slide->image && Storage::disk('public')->exists($slide->image)) {
                Storage::disk('public')->delete($slide->image);
            }

            // Загружаем новое
            $path = $request->file('image')->store('slides', 'public');
            $data['image'] = $path;
        }

        // Обновляем модель
        $slide->update($data);

        return redirect()->route('admin.slides.index')->with('success', 'Слайд успешно обновлён');
    }
    public function destroy(Slide $slide)
    {
        if ($slide->image && Storage::disk('public')->exists($slide->image)) {
            Storage::disk('public')->delete($slide->image);
        }

        $slide->delete();

        return back()->with('success', 'Слайд успешно удален');
    }
}
