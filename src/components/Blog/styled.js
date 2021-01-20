import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 50px 50px 50px;
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 800px;
  padding-bottom: 50px;
  margin: 20px 0 20px 0;
  
  border-bottom: 1px lightgrey solid;
`;

export const Title = styled.h2`
  font-size: 55px;
  margin-bottom: 15px;
  color: #242736;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: dimgrey;
  font-size: 14px;
  font-family: "Trebuchet MS";
`;

export const AuthorLink = styled.a`
  color: dimgrey;
  text-decoration: none;
  cursor: pointer;
  margin-right: 15px;
`;

export const Body = styled.p`
  font-size: 20px;
  margin: 20px 0 20px 0;
`;

export const ReadMoreLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  color: dimgrey;
  font-weight: bold;
`;

export const EditIcon = styled(MdEdit)`
  font-size: 17px;
  cursor: pointer;
  margin: 0 15px 0 20px;
  color: dimgrey;
`;

export const DeleteIcon = styled(FaTrash)`
  font-size: 13px;
  cursor: pointer;
  color: dimgrey;
`;
