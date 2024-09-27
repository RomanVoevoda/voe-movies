import { routesEnum } from "@/shared/config";
import { NextRouter } from "next/router";

export const createMockRouter = (route: routesEnum): NextRouter => {
  return {
    basePath: "",
    pathname: route,
    route: route,
    query: {},
    asPath: route,
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    forward: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "ru",
    domainLocales: [],
    isPreview: false,
  };
};
