import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const DeleteIcon = styled(FaTrash)`
  font-size: 12px;
  cursor: pointer;
  color: dimgrey;

  &:hover {
    color: black;
  }
`;

export const EditLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  color: dimgrey;
  margin: 0 15px 0 20px;

  &:hover {
    color: black;
  }
`;
