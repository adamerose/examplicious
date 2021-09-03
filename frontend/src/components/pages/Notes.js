import React, { useEffect, useState } from "react";
import MasonryGrid from "../common/MasonryGrid";
import styled from "styled-components/macro";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { notes$ } from "../../state/slices/notesSlice";
import { fetchNotes } from "../../state/slices/notesSlice";

const Notes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, [null]);

  const notes = useSelector((state) => Object.values(state.notes.byId));
  const notes2 = [
    {
      id: "1",
      title: "Title 1",
      text: "Text 1 - Est libero a lorem curabitur auctor at viverra ipsum id euismod condimentum dolor vel sit nullam libero nec",
    },
    { id: "2", title: "Title 2", text: "Text 2 - Auctor dolor vitae nullam" },
    {
      id: "3",
      title: "Title 3",
      text: "Text 3 - Viverra nunc enim adipiscing lorem laoreet id nec condimentum est odio dolor sagittis in libero nullam ipsum",
    },
  ];

  console.log(JSON.stringify(notes) == JSON.stringify(notes2));

  return (
    <StyledNotes>
      <MasonryGrid>
        {notes.map((note, i) => (
          <StyledNote key={i}>
            <h3>{note.title}</h3>
            <div>{note.text}</div>
          </StyledNote>
        ))}
      </MasonryGrid>
      <MasonryGrid>
        {notes2.map((note, i) => (
          <StyledNote key={i}>
            <h3>{note.title}</h3>
            <div>{note.text}</div>
          </StyledNote>
        ))}
      </MasonryGrid>
    </StyledNotes>
  );
};

const StyledNotes = styled.div`
  padding: 30px;
`;

const StyledNote = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.background};
  max-width: 250px;
  min-width: 250px;
  overflow-y: hidden;
  padding: 15px;
  margin: 15px;

  &.muuri-item-dragging {
    z-index: 1;
  }
`;

export default Notes;
