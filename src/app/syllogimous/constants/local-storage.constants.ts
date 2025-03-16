import { EnumQuestionType } from "./question.constants";
import { EnumScreens } from "./syllogimous.constants";

export const LS_DONT_SHOW = "SYL_DONT_SHOW:";
export const LS_HISTORY = "SYL_HISTORY";
export const LS_TIMER = "SYL_TIMER_TYPE";
export const LS_GAME_MODE = "SYL_GAME_MODE";
export const LS_DAILY_PROGRESS = "SYL_DAILY_PROGRESS";
export const LS_PG_SETTINGS = "SYL_PG_SETTINGSv1";
export const LS_DAILY_GOAL = "SYL_DAILY_GOAL";
export const LS_WEEKLY_GOAL = "SYL_WEEKLY_GOAL";
export const LS_TRAINING_UNIT = "SYL_TRAINING_UNIT:";
export const LS_TRAINING_UNIT_LENGTH = "SYL_TRAINING_UNIT_LENGTH";
export const LS_PREMISES_UP_THRESHOLD = "SYL_PREMISES_UP_THRESHOLD";
export const LS_PREMISES_DOWN_THRESHOLD = "SYL_PREMISES_DOWN_THRESHOLD";
export const LS_SCORE = "SYL_SCORE";

export const LS_PROPS = [
    LS_HISTORY,
    LS_TIMER,
    LS_GAME_MODE,
    LS_DAILY_PROGRESS,
    LS_PG_SETTINGS,
    LS_DAILY_GOAL,
    LS_WEEKLY_GOAL,
    LS_TRAINING_UNIT_LENGTH,
    LS_PREMISES_UP_THRESHOLD,
    LS_PREMISES_DOWN_THRESHOLD,
    LS_SCORE,
];

for (const screen of Object.values(EnumScreens)) {
    LS_PROPS.push(LS_DONT_SHOW + screen);
}

for (const type of Object.values(EnumQuestionType)) {
    LS_PROPS.push(LS_DONT_SHOW + type);
    LS_PROPS.push(LS_TRAINING_UNIT + type);
}