<?php

use App\Tag;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = ['laravel','php','MySQL','JS'];
        foreach($tags as $tag){
            $newtag = new Tag();
            $newtag->name=$tag;
            $newtag->slug = Str::slug($tag);
            $newtag->save();
        }
    }
}
