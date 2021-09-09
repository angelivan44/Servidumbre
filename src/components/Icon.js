import styled from "@emotion/styled";
import {
  RiFileExcel2Fill,
  RiChromeFill,
  RiCollageFill,
  RiFileWord2Fill,
  RiUserFill,
  RiChatDownloadFill,
  RiSafariFill,
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiWhatsappFill,
  RiQuestionAnswerFill,
  RiCheckboxFill,
  RiLogoutBoxFill,
  RiArrowUpCircleFill,
  RiLoader2Line
} from "react-icons/ri";
import { SiAutodesk } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import {ImSpinner2} from "react-icons/im"
export default function Icon({ type , onClick}) {
  const setIcon = {
    excel: <RiFileExcel2Fill onClick={onClick} />,
    home: <RiCollageFill onClick={onClick} />,
    word: <RiFileWord2Fill onClick={onClick}/>,
    user: <RiUserFill onClick={onClick}/>,
    autodesk: <SiAutodesk onClick={onClick}/>,
    csv: <FaFileCsv onClick={onClick}/>,
    download: <RiChatDownloadFill onClick={onClick}/>,
    status: <RiCheckboxFill  onClick={onClick}/>,
    resources: <RiChromeFill onClick={onClick} />,
    social: <IoIosContacts onClick={onClick}/>,
    web:<RiSafariFill onClick={onClick}/>,
    facebook: <RiFacebookBoxFill onClick={onClick}/>,
    youtube: <RiYoutubeFill onClick={onClick}/>,
    whatsapp : <RiWhatsappFill onClick={onClick}/>,
    answer: <RiQuestionAnswerFill onClick={onClick}/>,
    logout:<RiLogoutBoxFill onClick={onClick}/>,
    plus:<RiArrowUpCircleFill onClick={onClick} />,
    load:<RiLoader2Line onClick={onClick}/>,
    load2:<ImSpinner2 onClick={onClick}/>
  };

  return <>{setIcon[type]}</>;
}


