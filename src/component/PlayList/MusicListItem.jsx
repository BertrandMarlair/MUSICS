import React, {useEffect, useState} from "react";
import {PlayListStyle} from "./PlayListStyle";
import {withStyles, Avatar, Typography} from "@material-ui/core";
import {getData} from "../../api/youtube/YoutubeApi";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import {displayTitle} from "../../utils/display/DisplayTitle";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseIcon from "@material-ui/icons/Pause";

const MusicListItem = props => {
    const {
        classes,
        musicId,
        setCurrentMusic,
        current,
        changePlaylist,
        musics,
    } = props;

    const [musicInfo, setMusicInfo] = useState({});

    async function getMusicData() {
        const data = await getData(musicId);
        setMusicInfo(data.items[0]);
    }

    const playSong = () => {
        const playlist = musics;
        const firstItem = playlist[0];
        playlist.splice(0, 1);
        playlist.push(firstItem);
        const position = playlist.indexOf(musicId);
        playlist.splice(position, 1);
        playlist.unshift(musicId);
        setCurrentMusic(musicId);
        changePlaylist(playlist);
    };

    useEffect(() => {
        getMusicData();
    }, [musicId]);

    if (musicInfo && musicInfo.snippet) {
        return (
            <div className={classes.listItem}>
                <Avatar
                    src={
                        musicInfo.snippet
                            ? musicInfo.snippet.thumbnails.default.url
                            : "https://lukescircle.com/wp-content/uploads/job-manager-uploads/company_logo/2018/08/no-thumbnail-medium.png"
                    }
                    className={classes.avatar}
                />
                <div className={classes.control}>
                    <DragHandleIcon className={classes.iconPlayer} />
                </div>
                <FavoriteIcon className={classes.iconPlayer} />
                {current === musicId ? (
                    <PauseIcon
                        onClick={playSong}
                        className={classes.iconPlayer}
                    />
                ) : (
                    <PlayCircleFilledWhiteIcon
                        onClick={playSong}
                        className={classes.iconPlayer}
                    />
                )}
                <div className={classes.title}>
                    <Typography>
                        {displayTitle(
                            musicInfo.snippet
                                ? musicInfo.snippet.channelTitle
                                : "No title",
                        )}
                    </Typography>
                    <Typography
                        variant={"body2"}
                        className={classes.description}>
                        {musicInfo.snippet ? musicInfo.snippet.title : musicId}
                    </Typography>
                </div>
            </div>
        );
    }
    return <div>Loading...</div>;
};

export default withStyles(PlayListStyle)(MusicListItem);
