<?php

namespace App\Http\Controllers;

use App\Models\Certifications;
use App\Models\ContentWebPage;
use App\Models\Equipments;
use App\Models\News;
use App\Models\OverviewHistory;
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

    /**
     * Obter o história
     */
    public function get_history()
    {
        $history = OverviewHistory::orderBy('order', 'ASC')->get();

        return response()->json($history);
    }

    /**
     * Obter certifications
     */
    public function get_certification()
    {
        $history = Certifications::orderBy('order', 'ASC')->get();

        return response()->json($history);
    }

    /**
     * Obter equipamentos
     */
    public function get_equipment()
    {
        $equipments = Equipments::orderBy('order', 'ASC')->get();

        return response()->json($equipments);
    }

    /**
     * Obter todas páginas e verifica quais estão ativas
     */
    public function get_all_pages(Request $request)
    {
        $en = $request->en;
        if ($en) {
            $pages = ContentWebPage::where('visible_en', true)->select([
                'name_menu',
                'slug'
            ])->get();
        } else {
            $pages = ContentWebPage::where('visible', true)->select([
                'name_menu',
                'slug'
            ])->get();
        }


        return response()->json($pages);
    }
}
