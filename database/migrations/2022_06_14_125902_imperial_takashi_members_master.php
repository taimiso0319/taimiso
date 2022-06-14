<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ImperialTakashiMembersMaster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imperial_takashi_members_master', function(Blueprint $table){
            $table->increments('id');
            $table->string('steamId64')->nullable();
            $table->string('twitterId');
            $table->string('youtubeChannelId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imperial_takashi_members_master');
    }
}
