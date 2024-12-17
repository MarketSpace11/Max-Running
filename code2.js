gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDScorePannelObjects1= [];
gdjs.LeaderboardCode.GDScorePannelObjects2= [];
gdjs.LeaderboardCode.GDScorePannelObjects3= [];
gdjs.LeaderboardCode.GDScorePannelObjects4= [];
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDScoreTextObjects3= [];
gdjs.LeaderboardCode.GDScoreTextObjects4= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects4= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects3= [];
gdjs.LeaderboardCode.GDRestartButtonObjects4= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects3= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects4= [];
gdjs.LeaderboardCode.GDScoresButtonObjects1= [];
gdjs.LeaderboardCode.GDScoresButtonObjects2= [];
gdjs.LeaderboardCode.GDScoresButtonObjects3= [];
gdjs.LeaderboardCode.GDScoresButtonObjects4= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects3= [];
gdjs.LeaderboardCode.GDPlatformObjects4= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects3= [];
gdjs.LeaderboardCode.GDBackgroundObjects4= [];
gdjs.LeaderboardCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardCode.GDDustParticlesObjects2= [];
gdjs.LeaderboardCode.GDDustParticlesObjects3= [];
gdjs.LeaderboardCode.GDDustParticlesObjects4= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "f7b51602-6c88-415b-bdbe-1cb1304c3842", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects3);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "f7b51602-6c88-415b-bdbe-1cb1304c3842", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects3[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects3[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f7b51602-6c88-415b-bdbe-1cb1304c3842", true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects2[k] = gdjs.LeaderboardCode.GDRestartButtonObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitButtonObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitButtonObjects2[k] = gdjs.LeaderboardCode.GDSubmitButtonObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.LeaderboardCode.GDScoresButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDScoresButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDScoresButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDScoresButtonObjects1[k] = gdjs.LeaderboardCode.GDScoresButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDScoresButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f7b51602-6c88-415b-bdbe-1cb1304c3842", true);
}}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("f7b51602-6c88-415b-bdbe-1cb1304c3842");
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LeaderboardCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score   " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "drone-gentle-growling-and-swelling-background-239692.mp3", true, 50, 1);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


gdjs.LeaderboardCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScorePannelObjects1.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects2.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects3.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects4.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects4.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects4.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects3.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects4.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects4.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects3.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects4.length = 0;

gdjs.LeaderboardCode.eventsList4(runtimeScene);
gdjs.LeaderboardCode.GDScorePannelObjects1.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects2.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects3.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects4.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects4.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects4.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects3.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects4.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects4.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects3.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects4.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
