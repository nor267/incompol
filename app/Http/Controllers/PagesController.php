<?php

namespace App\Http\Controllers;

use App\Models\ContentWebPage;
use App\Models\News;
use App\Models\OverviewIcons;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function get_page(Request $request)
    {

        $slug = $request->slug;

        $page = ContentWebPage::where('slug', $request->slug)->first();

        return response()->json($page);
    }

    /**
     * Na página about us é o "company overview"
     */
    public function get_icons(Request $request)
    {

        $icons = OverviewIcons::where('content_web_page_id', $request->id)
            ->orderBy('order', 'ASC')
            ->get();

        return response()->json($icons);
    }

    /**
     * Obter todas as notícias visíveis da mais recente para a mais antiga
     */
    public function get_news()
    {
        $news = News::where('visible', true)->orderBy('date', 'DESC')->get();

        return response()->json($news);
    }
}
