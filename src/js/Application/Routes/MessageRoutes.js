import {Router} from "chomex";
import * as Controllers from "../Controllers/MessageControllers";

let router = new Router();
router.on("/config/get",             Controllers.GetConfig);
router.on("/config/set",             Controllers.SetConfig);
router.on("/sync/save",              Controllers.SyncSave);
router.on("/sync/load",              Controllers.SyncLoad);
router.on("/window/open",            Controllers.OpenWindow);
router.on("/window/dashboard",       Controllers.OpenDashboard);
router.on("/window/should-decorate", Controllers.ShouldDecorateWindow);
router.on("/window/capture",         Controllers.CaptureWindow);
router.on("/window/zoom:set",        Controllers.ZoomWindow);
router.on("/window/current-action",  Controllers.CurrentActionForWindow);
router.on("/window/self",            Controllers.GetMyself);
router.on("/window/mute",            Controllers.MuteWindow);
router.on("/window/event/onclose",   Controllers.OnCloseGameWindow);
router.on("/frame/all",              Controllers.GetAllFrames);
router.on("/frame/new",              Controllers.SaveNewFrame);
router.on("/frame/update",           Controllers.UpdateFrame);
router.on("/frame/delete",           Controllers.DeleteFrame);
router.on("/snapshot/take",          Controllers.TakeDamageSnapshot);
router.on("/queues/get",             Controllers.GetQueues);
router.on("/queues/manual",          Controllers.SetQueueManual);
router.on("/queues/clear",           Controllers.ClearQueue);
router.on("/twitter/profile",        Controllers.TwitterProfile);
router.on("/twitter/auth",           Controllers.TwitterAuth);
router.on("/twitter/revoke",         Controllers.TwitterRevoke);
router.on("/twitter/announce",       Controllers.GetKanColleSTAFFTweets);
router.on("/twitter/post_with_image",Controllers.TwitterPostWithImage);
// 資源推移表
router.on("/resources/capture",      Controllers.ResourceCapture);
// 動画キャプチャ関係
router.on("/stream/recording/start", Controllers.StreamStartRecording);
router.on("/stream/recording/stop",  Controllers.StreamStopRecording);
router.on("/stream/revoke",          Controllers.StreamRevoke);
router.on("/debug/notification",     Controllers.NotificationDebug);
router.on("/debug/x/controller",     Controllers.ExecuteController);
router.on("/launchposition/:update",          Controllers.UpdateLaunchPosition);
router.on("/launchposition/dashboard/update", Controllers.UpdateDashboardLaunchPosition);
router.on("/launchposition/dsnapshot/update", Controllers.UpdateDamageSnapshotLaunchPosition);

// なんか雑なの
router.on("/events/trigger", Controllers.TriggerEvent);

const MessageListener = router.listener();
export default MessageListener;
