import React from "react";
import { Composition } from "remotion";
import { MeetingComedy } from "./Video";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MeetingComedy"
      component={MeetingComedy}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
