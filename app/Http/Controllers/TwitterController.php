<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Atymic\Twitter\Facade\Twitter;

class TwitterController extends Controller
{
    public function getUsersLookup(array $user_ids){
        $hash = md5(implode($user_ids));
        return \Cache::remember('TwitterController:getUsersLookup:'.$hash,6000, function() use ($user_ids) {
            return Twitter::getUsersLookup(['user_id'=>implode(",",$user_ids)]);
        });
    }

    public  function show(){
        return Twitter::getUsersLookup(['user_id'=>"153415601,null,76562029"]);
    }
}
