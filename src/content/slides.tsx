import type { Language } from './translations';
import { TitleSlide } from '../slides/TitleSlide';
import { 
  Slide02_Hook, Slide03_InvisibleProblem, Slide04_CuratorQuestion, 
  Slide05_ExistingFoundations, Slide06_RemainingGap, Slide07_MuseDSLIdea, 
  Slide08_Federation, Slide09_Sovereignty 
} from '../slides/SlideContentPart1';
import { 
  Slide10_MIP, Slide11_MCORE, Slide12_Agents, Slide13_WhyDSL, 
  Slide14_RuleStructure, Slide15_Scoring 
} from '../slides/SlideContentPart2';
import { SimulationSlide } from '../slides/SimulationSlide';
import { Slide23_PilotStats, Slide24_FinalVision } from '../slides/SlideContentPart3';

export interface SlideProps {
  lang: Language;
}

export const slides = [
  TitleSlide, // 1
  Slide02_Hook, // 2
  Slide03_InvisibleProblem, // 3
  Slide04_CuratorQuestion, // 4
  Slide05_ExistingFoundations, // 5
  Slide06_RemainingGap, // 6
  Slide07_MuseDSLIdea, // 7
  Slide08_Federation, // 8
  Slide09_Sovereignty, // 9
  Slide10_MIP, // 10
  Slide11_MCORE, // 11
  Slide12_Agents, // 12
  Slide13_WhyDSL, // 13
  Slide14_RuleStructure, // 14
  Slide15_Scoring, // 15
  SimulationSlide, // 16-21 combined
  Slide23_PilotStats, // 22
  Slide24_FinalVision // 23
];
