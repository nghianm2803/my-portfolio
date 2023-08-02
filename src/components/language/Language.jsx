import React from "react";
import "./language.css";
import {
  NodeJsIcon,
  ReactIcon,
  TsIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  MongoDbIcon,
  ExpressIcon,
} from "./Stack";

const Language = () => {
  return (
    <section className="language container section" id="language">
      <h2 className="section__title">Languages I speak</h2>

      <div className="language__container grid">
        <div className="language__item">
          <MongoDbIcon />
        </div>
        <div className="language__item">
          <ExpressIcon />
        </div>
        <div className="language__item">
          <ReactIcon />
        </div>
        <div className="language__item">
          <NodeJsIcon />
        </div>
        <div className="language__item">
          <TsIcon />
        </div>
        <div className="language__item">
          <JsIcon />
        </div>
        <div className="language__item">
          <HtmlIcon />
        </div>
        <div className="language__item">
          <CssIcon />
        </div>
      </div>
    </section>
  );
};

export default Language;
