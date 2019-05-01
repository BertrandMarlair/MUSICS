/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-invalid-this */
import React, {Fragment, Component} from "react";
import ReactPlayer from "react-player";
import Duration from "./Duration";
import {PlayerStyle} from "./PlayerStyle";
import {withStyles, Typography, Avatar} from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import {getData} from "../../api/youtube/YoutubeApi";
import {displayTitle} from "../../utils/display/DisplayTitle";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {MusicContext} from "../../context/MusicContext";
import CircularProgress from "@material-ui/core/CircularProgress";

const youtubeUrl = "https://music.youtube.com/watch?v=";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            pip: false,
            playing: true,
            volume: 0.8,
            muted: false,
            ready: false,
            played: 0,
            duration: 0,
            player: null,
            musicInfo: {},
            actualPlaylist: [],
        };
    }

    load = newUrl => {
        this.setState({url: newUrl});
        this.setState({played: 0});
        this.setState({pip: false});
        this.setState({ready: false});
    };

    componentDidMount() {
        this.load(`${youtubeUrl}${this.props.current}`);
        this.getMusicData(this.props.current);
    }

    playPause = () => {
        this.setState(state => ({playing: !state.playing}));
    };

    stop = () => {
        this.setState({url: null});
        this.setState({playing: false});
    };

    setVolume = e => {
        this.setState({volume: parseFloat(e.target.value)});
    };

    toggleMuted = () => {
        this.setState(state => ({muted: !state.muted}));
    };

    onPlay = () => {
        this.setState({playing: true});
    };

    onEnablePIP = () => {
        this.setState({pip: true});
    };

    onDisablePIP = () => {
        this.setState({pip: false});
    };

    onPause = () => {
        this.setState({playing: false});
    };

    onSeekChange = e => {
        this.setState({played: parseFloat(e.target.value)});
    };

    onSeekMouseUp = e => {
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(e.target.value));
    };

    onProgress = state => {
        this.setState({played: state.played});
    };

    onEnded(setCurrentContext, currentMusicContext, changePlaylistContext) {
        const newPlaylist = this.props.playlist;
        const nextSound = this.props.playlist[1];
        const newCurrent = currentMusicContext;
        newPlaylist.splice(0, 1);
        newPlaylist.push(newCurrent);
        changePlaylistContext(newPlaylist);
        setCurrentContext(nextSound);
    }

    onDuration = newDuration => {
        this.setState({duration: newDuration});
    };

    onReady = () => {
        this.setState({ready: true});
    };

    ref = player => {
        this.player = player;
    };

    async getMusicData(musicId) {
        const data = await getData(musicId);
        this.setState({musicInfo: data.items[0]});
    }

    componentWillReceiveProps(newProps) {
        if (this.props.current !== newProps.current) {
            this.load(`${youtubeUrl}${newProps.current}`);
            this.getMusicData(newProps.current);
        }
    }

    render() {
        const {classes} = this.props;
        const {
            musicInfo,
            muted,
            playing,
            volume,
            pip,
            duration,
            played,
            url,
            ready,
        } = this.state;
        if (musicInfo && musicInfo.snippet) {
            return (
                <MusicContext.Consumer>
                    {({setCurrentMusic, currentMusic, changePlaylist}) => (
                        <Fragment>
                            <div className={classes.playerVideo}>
                                <ReactPlayer
                                    ref={this.ref}
                                    className={"react-player"}
                                    width={"100%"}
                                    height={"100%"}
                                    url={url}
                                    pip={pip}
                                    playing={playing}
                                    volume={volume}
                                    muted={muted}
                                    onPlay={this.onPlay}
                                    onEnablePIP={this.onEnablePIP}
                                    onDisablePIP={this.onDisablePIP}
                                    onPause={this.onPause}
                                    onEnded={() =>
                                        this.onEnded(
                                            setCurrentMusic,
                                            currentMusic,
                                            changePlaylist,
                                        )
                                    }
                                    onProgress={this.onProgress}
                                    onDuration={this.onDuration}
                                    onStart={() => this.onReady()}
                                    // onReady={this.onReady}
                                    // onBuffer={() => console.log("onBuffer")}
                                    // onSeek={e => console.log("onSeek", e)}
                                    // onError={e => console.log("onError", e)}
                                />
                            </div>
                            <div className={classes.player}>
                                <Avatar
                                    src={
                                        musicInfo.snippet
                                            ? musicInfo.snippet.thumbnails
                                                  .default.url
                                            : "https://lukescircle.com/wp-content/uploads/job-manager-uploads/company_logo/2018/08/no-thumbnail-medium.png"
                                    }
                                    className={classes.avatar}
                                />
                                <FavoriteIcon className={classes.icon} />
                                {ready ? (
                                    <Fragment>
                                        <StopIcon
                                            onClick={this.stop}
                                            className={classes.iconPlayer}
                                        />
                                        {playing ? (
                                            <PauseIcon
                                                onClick={this.playPause}
                                                className={classes.iconPlayer}
                                            />
                                        ) : (
                                            <PlayCircleFilledWhiteIcon
                                                onClick={this.playPause}
                                                className={classes.iconPlayer}
                                            />
                                        )}
                                    </Fragment>
                                ) : (
                                    <div>
                                        <CircularProgress
                                            color={"secondary"}
                                            className={classes.progress}
                                            disableShrink
                                            size={24}
                                            thickness={4}
                                        />
                                    </div>
                                )}
                                <div className={classes.rootSlider}>
                                    <div className={classes.title}>
                                        <Typography>
                                            {displayTitle(
                                                musicInfo.snippet
                                                    ? musicInfo.snippet
                                                          .channelTitle
                                                    : "No title",
                                            )}
                                        </Typography>
                                        <Typography
                                            variant={"body2"}
                                            className={classes.soungName}>
                                            {musicInfo.snippet
                                                ? musicInfo.snippet.title
                                                : "No title"}
                                        </Typography>
                                    </div>
                                    <input
                                        className={"slider"}
                                        type={"range"}
                                        min={0}
                                        max={1}
                                        step={"any"}
                                        value={played}
                                        onChange={this.onSeekChange}
                                        onMouseUp={this.onSeekMouseUp}
                                    />
                                </div>
                                <Typography className={classes.duration}>
                                    <Duration seconds={duration * played} /> /{" "}
                                    <Duration seconds={duration} />
                                </Typography>
                                {muted ? (
                                    <VolumeOffIcon
                                        onClick={this.toggleMuted}
                                        className={classes.iconPlayer}
                                    />
                                ) : volume === 0 ? (
                                    <VolumeMuteIcon
                                        onClick={this.toggleMuted}
                                        className={classes.iconPlayer}
                                    />
                                ) : volume >= 0.5 ? (
                                    <VolumeUpIcon
                                        onClick={this.toggleMuted}
                                        className={classes.iconPlayer}
                                    />
                                ) : (
                                    <VolumeDownIcon
                                        onClick={this.toggleMuted}
                                        className={classes.iconPlayer}
                                    />
                                )}
                                <div className={classes.rootVolume}>
                                    <input
                                        type={"range"}
                                        className={"slider"}
                                        min={0}
                                        max={1}
                                        step={"any"}
                                        value={volume}
                                        onChange={this.setVolume}
                                    />
                                </div>
                            </div>
                        </Fragment>
                    )}
                </MusicContext.Consumer>
            );
        }
        return (
            <div className={classes.playerVideo}>
                <Typography>No sound played </Typography>
            </div>
        );
    }
}

export default withStyles(PlayerStyle)(Player);
