<?php

namespace App\Http\Controllers;

use App\Models\Certifications;
use App\Models\ContentWebPage;
use App\Models\Equipments;
use App\Models\Job;
use App\Models\News;
use App\Models\OverviewHistory;
use App\Models\OverviewIcons;
use App\Models\Portefolio;
use App\Models\PortefolioImage;
use App\Models\PortefolioSubCategory;
use App\Models\Settings;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function get_page(Request $request)
    {

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
    public function get_equipment(Request $request)
    {
        $equipments = Equipments::where('content_web_page_id', $request->id)
            ->orderBy('order', 'ASC')
            ->get();

        return response()->json($equipments);
    }

    /**
     * Obter todas páginas e verifica quais estão ativas
     */
    public function get_all_pages(Request $request)
    {
        $en = $request->en;
        if ($en) {
            $pages = ContentWebPage::where('visible_en', true)->where('menu', true)->select([
                'name_menu',
                'slug',
                'section_7_media'
            ])->get();
        } else {
            $pages = ContentWebPage::where('visible', true)->where('menu', true)->select([
                'name_menu',
                'slug',
                'section_7_media'
            ])->get();
        }


        return response()->json($pages);
    }

    /**
     * Definições do website que podem ser alteradas no backoffice
     * @param key string 
     */
    public function get_settings(Request $request)
    {

        $key = $request->key;
        $settings = Settings::where('key', $key)->select([
            'value',
        ])->first();

        return response()->json($settings);
    }


    /**
     * Obtém todos os empregos visiveis por ordem de data
     */
    public function get_jobs()
    {

        $jobs = Job::where('visible', true)->select([
            'banner_image',
            'date',
            'title',
            'description'
        ])->orderBy("date", 'DESC')->get();

        return response()->json($jobs);
    }

    public function get_portfolio()
    {
        $portefolio = Portefolio::orderBy('order', 'ASC')->get();

        $components = PortefolioSubCategory::orderBy('order', 'ASC')->with('images')->whereHas('images')->get();

        $gallery = PortefolioImage::orderBy('order', 'ASC')->get();

        return response()->json([
            "portefolio" => $portefolio,
            "components" => $components,
            "gallery" => $gallery,
        ]);
    }
}
