import React from "react"
import { useAudioPlayer } from "react-use-audio-player"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const AudioPlayer = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: file,
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })

    if (!ready && !loading) return <div>No audio to play</div>
    if (loading) return ( <div
        style={{ "border-top-color": "transparent" }}
        class="w-6 h-6 ml-1 border-4 mt-3 border-emerald-300 rounded-full animate-spin"
      ></div>)

    return (
        <div>
            <button onClick={togglePlayPause}>{playing ? <FaPauseCircle className="text-2xl ml-1 mt-2 text-emerald-200" /> : <FaPlayCircle className="text-2xl ml-1 mt-2 text-emerald-200"/>}</button>
        </div>
    )
}

export default AudioPlayer