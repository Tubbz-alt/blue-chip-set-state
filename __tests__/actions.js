import jsonApiPayload
  from "../__testHelpers__/fixtures/checklistsJsonApiResponse";
import graphQlPayload
  from "../__testHelpers__/fixtures/checklistsGraphQlResponse";

import {Actions} from "../../blue-chip";
import setStateAdapter from "../";
const setState = jest.fn().mockName("setState");
const actions = Actions.config({
  adapter: setStateAdapter,
  mutator: setState
});
// TODO: Add react as a dev dependency and use setState
describe("setState Actions", () => {
  describe("updateResources", () => {
    describe("JsonApi", () => {
      test("calls setState for each resource", () => {
        const tasksMergeResourcesCallback = () => {};
        const checklistsMergeResourcesCallback = () => {};

        actions.updateResources(jsonApiPayload);
        // expect(setState).toBeCalledWith(() => {});
        // expect(setState).toBeCalledWith(() => {});
      });
    });

    describe("GraphQl", () => {
      test("calls setState for each resource", () => {
        const tasksMergeResourcesCallback = () => {};
        const checklistsMergeResourcesCallback = () => {};

        actions.updateResources(graphQlPayload);
        // expect(setState).toBeCalledWith(() => {});
        // expect(setState).toBeCalledWith(() => {});
      });
    });
  });

  describe("updateResource", () => {});

  describe("removeResources", () => {});

  describe("removeResource", () => {});

  describe("clearResources", () => {});
});
