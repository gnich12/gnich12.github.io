/**
 * Created by Alvaro on 5/4/2015.
 */
/*var TEAM_A=0;
var TEAM_B=0;
var PREV_POINT_A=false;
var PREV_POINT_B=false;
var TEAM_NAME_A="", TEAM_NAME_B="";
var SET_NUM=1;*/

var score={"TEAM_A":0,"TEAM_B":0,"PREV_POINT_A":false,"PREV_POINT_B":false,"TEAM_NAME_A":"''", "TEAM_NAME_B":"''",
    "SET_NUM":1,
    "allPointTeamA":[],
    "allPointTeamB":[]
};
var KEY="score_sheet";


$(document).on("pageinit","#score_keeper", function(){

    if(window.localStorage.length===0){
       window.localStorage.setItem(KEY,JSON.stringify(score));
    }else{
       loadFromStorage(KEY);
    }

});



$(function(){


    $("#box-a").on("tap", function(event){
        score.TEAM_A+=1;
        score.PREV_POINT_A=true;
        score.PREV_POINT_B=false;

        $("#box-a span").html(score.TEAM_A);
        updateStorage(KEY,score);

    });

    $("#box-b").on("tap", function(event){
        score.TEAM_B+=1;
        score.PREV_POINT_B=true;
        score.PREV_POINT_A=false;
        $("#box-b span").html(score.TEAM_B);
        updateStorage(KEY,score);
    });

    $("#replay_point").on("tap",function(event){
        if(score.PREV_POINT_A===true){
            if(score.TEAM_A!=0){
                score.TEAM_A-=1;
                score.PREV_POINT_A=false;
            }else{
                score.PREV_POINT_A=false;
            }
        }
        if(score.PREV_POINT_B===true){
            if(score.TEAM_B!=0){
                score.TEAM_B-=1;
                score.PREV_POINT_B=false;
            }else{
                score.PREV_POINT_B=false;
            }

        }

        $("#box-a span").html(score.TEAM_A);
        $("#box-b span").html(score.TEAM_B);
        updateStorage(KEY,score);
    });

    $("#save_score").on("tap",function(event){
        var a=parseInt($("#new_score_a").val());
        var b=parseInt($("#new_score_b").val());
        console.log(a);
        if(a!=NaN && a >= 0){
            score.TEAM_A=a;
            score.PREV_POINT_A=false, score.PREV_POINT_B=false;
            $("#box-a span").html(score.TEAM_A);

        }
        if(b!=NaN && b >= 0){
            score.TEAM_B=b
            score.PREV_POINT_A=false, score.PREV_POINT_B=false;
            $("#box-b span").html(score.TEAM_B);

        }
        updateStorage(KEY,score);
    });


    $("#save_team_name_a, #save_team_name_b").on("tap",function(event){
        if($(this).parent('#save-block-a')){
            if($('#team-a').val()!=""){
                score.TEAM_NAME_A=$('#team-a').val()
                $('#team_name_a').html(score.TEAM_NAME_A);
                updateStorage(KEY,score);
            }
        }
        if($(this).parent('#save-block-b')){
            if($('#team-b').val()!=""){
                score.TEAM_NAME_B=$('#team-b').val();
                $('#team_name_b').html(score.TEAM_NAME_B);
                updateStorage(KEY,score);
            }
        }

    });

    $(".next_set").on("tap", function(event){

        if(score.SET_NUM%2!=0){
            $("#team-a").val(score.TEAM_NAME_B);
            $("#team-b").val(score.TEAM_NAME_A);
        }else{
            $("#team-a").val(score.TEAM_NAME_A);
            $("#team-b").val(score.TEAM_NAME_B);
        }



        saveScores(score)
      
        updateStorage(KEY,score);
        reset_Scores();

    });



});

function reset_Scores(){
    score.TEAM_A=0;
    score.TEAM_B=0;
    score.PREV_POINT_A=false;
    score.PREV_POINT_B=false;
    $("#box-a span, #box-b span").html(0);
}
function saveScores(score){
    var pointA=$('#row-a td:eq('+score.SET_NUM+')');
    var pointB=$('#row-b td:eq('+score.SET_NUM+')')

    if(score.TEAM_A>score.TEAM_B){
        pointA.addClass("win");
        pointA.html(score.TEAM_A);
        pointB.html(score.TEAM_B);

    }else{
        pointB.addClass("win");
        pointB.html(score.TEAM_B);
        pointA.html(score.TEAM_A);

    }

    score.allPointTeamA[score.SET_NUM]=score.TEAM_A;
    score.allPointTeamB[score.SET_NUM]=score.TEAM_B;

    score.SET_NUM+=1;
}


function loadFromStorage(Key){
    var store=JSON.parse(window.localStorage.getItem(KEY));
    score.TEAM_A=store.TEAM_A;
    score.TEAM_B=store.TEAM_B;
    score.PREV_POINT_A=store.PREV_POINT_A;
    score.PREV_POINT_B=store.PREV_POINT_B;
    score.TEAM_NAME_A=store.TEAM_NAME_A;
    score.TEAM_NAME_B=store.TEAM_NAME_B;
    //score.allPointTeamA=(store.allPointTeamA);
    //score.allPointTeamB=(store.allPointTeamB);
    score.SET_NUM=store.SET_NUM;

    $("#box-a span").html(score.TEAM_A);
    $("#box-b span").html(score.TEAM_B);

    $('#team_name_a').html(score.TEAM_NAME_A);
    $('#team_name_b').html(score.TEAM_NAME_B);

    if(score.SET_NUM%2===0){
        $("#team-a").val(score.TEAM_NAME_B);
        $("#team-b").val(score.TEAM_NAME_A);
    }else{
        $("#team-a").val(score.TEAM_NAME_A);
        $("#team-b").val(score.TEAM_NAME_B);
    }

    if(score.SET_NUM>1){
        for (var i = 1; i<=store.allPointTeamA.length; i++){

            score.allPointTeamA[i]=store.allPointTeamA[i];
            $('#row-a td:eq('+(i)+')').html(score.allPointTeamA[i]);

        }
        for (var b=1; b<=store.allPointTeamB.length; b++){

            score.allPointTeamB[b]=store.allPointTeamB[b];
            $('#row-b td:eq('+(b)+')').html(score.allPointTeamB[b]);

        }
    }


}
function updateStorage(KEY,score){
    var store=JSON.parse(window.localStorage.getItem(KEY));
    store.TEAM_A=score.TEAM_A;
    store.TEAM_B=score.TEAM_B;
    store.PREV_POINT_A=score.PREV_POINT_A;
    store.PREV_POINT_B=score.PREV_POINT_B;
    store.TEAM_NAME_A=score.TEAM_NAME_A;
    store.TEAM_NAME_B=score.TEAM_NAME_B;
    for(var i=1; i<score.allPointTeamA.length; i++){
        store.allPointTeamA[i]=(score.allPointTeamA[i]);

    }
    for (var b=1; b<score.allPointTeamB.length; b++){
        store.allPointTeamB[b]=(score.allPointTeamB[b]);
    }
    store.SET_NUM=score.SET_NUM;
    window.localStorage.setItem(KEY,JSON.stringify(store));
}

