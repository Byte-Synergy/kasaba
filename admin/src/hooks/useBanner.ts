import { useState } from "react";

export const useBannerStates = () => {
  return {
    fit: {
      state: useState([]),
      modalOpen: useState(false),
      file: useState(null),
      url: useState(""),
    },
    hero1: {
      state: useState([]),
      modalOpen: useState(false),
      file: useState(null),
      url: useState(""),
    },
    hero2: {
      state: useState([]),
      modalOpen: useState(false),
      file: useState(null),
      url: useState(""),
    },
    full: {
      state: useState([]),
      modalOpen: useState(false),
      file: useState(null),
      url: useState(""),
    },
  };
};
