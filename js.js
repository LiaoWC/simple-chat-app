// // const constraints = {
// //     audio: true,
// //     video: {
// //         // width: {min: 1024, ideal: 1280, max: 1920},
// //         // height: {min: 776, ideal: 720, max: 1080}
// //         width: 800, height: 600
// //     }
// // }
// //
// // let localStream;
// // let videoTrack;
// // let audioTrack;
// //
// //
// // navigator.mediaDevices.getUserMedia(constraints)
// //     .then(function (stream) {
// //         document.querySelector('#myVideo').srcObject = stream;
// //
// //         localStream = stream;
// //         // 取得裝置名稱
// //         videoTrack = stream.getVideoTracks();
// //         console.log(`使用影像裝置 => ${videoTrack[0].label}`);
// //
// //         audioTrack = stream.getAudioTracks();
// //         console.log(`使用聲音裝置 => ${audioTrack[0].label}`);
// //     })
// //     .catch(function (err) {
// //         // 取得失敗
// //         console.log(err)
// //     })
//
//
//
// const myVideo = document.querySelector('#myVideo');
// let localstream;
//
// // 初始化影像/聲音
// async function createMedia() {
//     // 儲存本地流到全域
//     localstream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
//
//     myVideo.srcObject = localstream;
// };
//
// // 取得裝置名稱
// function getAudioVideo() {
//     const video = localstream.getVideoTracks();
//     const audio = localstream.getAudioTracks();
//
//     if (video.length > 0) {
//         console.log(`使用影像裝置 => ${video[0].label}`)
//     };
//     if (audio.length > 0) {
//         console.log(`使用聲音裝置 => ${audio[0].label}`)
//     };
// }

