import { getArrayFromTwoNumbers } from "@/shared/helpers";

export const ratingOptions = getArrayFromTwoNumbers(0, 10).map(String);
