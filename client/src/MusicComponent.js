import React, { useEffect } from "react";
import Vex from "vexflow";

const MusicComponent = ({ Music }) => {
  useEffect(() => {
    const VF = Vex.Flow;
    const div = document.getElementById("MusicNotes");
    const renderer = new VF.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    renderer.resize(800, 200);
    const context = renderer.getContext();
    const stave = new VF.Stave(10, 40, 780);
    stave.addClef("treble").addTimeSignature("4/4").setContext(context).draw();
  }, [Music]);

  return <div id="MusicNotes" />;
};

export default MusicComponent;
