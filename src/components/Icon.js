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
  RiCheckboxFill
} from "react-icons/ri";
import { SiAutodesk } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
export default function Icon({ type }) {
  const setIcon = {
    excel: <RiFileExcel2Fill />,
    home: <RiCollageFill />,
    word: <RiFileWord2Fill />,
    user: <RiUserFill />,
    autodesk: <SiAutodesk />,
    csv: <FaFileCsv />,
    download: <RiChatDownloadFill />,
    status: <RiCheckboxFill />,
    resources: <RiChromeFill />,
    social: <IoIosContacts />,
    web:<RiSafariFill/>,
    facebook: <RiFacebookBoxFill/>,
    youtube: <RiYoutubeFill/>,
    whatsapp : <RiWhatsappFill/>,
    answer: <RiQuestionAnswerFill/>
  };

  return <>{setIcon[type]}</>;
}


