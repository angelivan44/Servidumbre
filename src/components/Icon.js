import styled from "@emotion/styled";
import {RiFileExcel2Fill, RiCollageFill,RiFileWord2Fill,RiUserFill, RiChatDownloadFill} from 'react-icons/ri'
import {SiAutodesk} from 'react-icons/si'
import {FaFileCsv} from 'react-icons/fa'
export default function Icon({type}) {

  const setIcon = {
    excel : <RiFileExcel2Fill/>,
    home : <RiCollageFill/>,
    word : <RiFileWord2Fill/>,
    user: <RiUserFill/>,
    autodesk : <SiAutodesk/>,
    csv:<FaFileCsv/>,
    download : <RiChatDownloadFill/>
  }

 
  return (
    <>
    {setIcon[type]}
    </>
  );
}

const StyleDiv = styled.div`
  width: 256px;
  height: 40px;
  & > svg {
    fill:red;
  }

`
