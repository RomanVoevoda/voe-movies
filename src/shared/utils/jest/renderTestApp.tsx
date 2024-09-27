import { createReduxStore } from "@/app/store";
import { routesEnum, Store } from "@/shared/config";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockRouter } from "../next/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

interface RenderTestAppOptions {
  initialState?: Store;
  route?: routesEnum;
}

export const renderTestApp = (
  component: JSX.Element,
  { initialState, route = routesEnum.home }: RenderTestAppOptions = {},
) => {
  const mockStore = createReduxStore(initialState);
  const mockRouter = createMockRouter(route);

  return render(
    <Provider store={mockStore}>
      <RouterContext.Provider value={mockRouter}>{component}</RouterContext.Provider>
    </Provider>,
  );
};
