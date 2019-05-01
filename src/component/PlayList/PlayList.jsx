import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import MusicListItem from "./MusicListItem";
import {MusicContext} from "../../context/MusicContext";
import {main} from "../../style/Constant";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? main : "inherit",
    ...draggableStyle,
});

const PlayList = () => {
    const handleDragEnd = (result, test, changePlaylist) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            test,
            result.source.index,
            result.destination.index,
        );
        changePlaylist(items);
    };

    return (
        <MusicContext.Consumer>
            {({musics, changePlaylist, setCurrentMusic, currentMusic}) => (
                <DragDropContext
                    onDragEnd={e => handleDragEnd(e, musics, changePlaylist)}>
                    <Droppable droppableId={"droppable"}>
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {musics.map((musicId, index) => (
                                    <Draggable
                                        key={musicId}
                                        draggableId={musicId}
                                        index={index}>
                                        {(provideded, snapshot) => (
                                            <div
                                                ref={provideded.innerRef}
                                                {...provideded.draggableProps}
                                                {...provideded.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provideded.draggableProps
                                                        .style,
                                                )}>
                                                <MusicListItem
                                                    key={`music/${musicId}`}
                                                    musicId={musicId}
                                                    musics={musics}
                                                    setCurrentMusic={
                                                        setCurrentMusic
                                                    }
                                                    current={currentMusic}
                                                    changePlaylist={
                                                        changePlaylist
                                                    }
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </MusicContext.Consumer>
    );
};

export default PlayList;
