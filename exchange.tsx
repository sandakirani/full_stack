import React, { useState } from "react";
import Navbar from "../home/navbar";
import Footer from "../home/Footer";
import "./exchange.css";

const ReturnsRefunds: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
  
    const toggleSection = (section: string) => {
      setOpenSection(openSection === section ? null : section);
    };
    const sectionContent: Record<string, string> = {
        // need to write the title and relevent content


    }
}