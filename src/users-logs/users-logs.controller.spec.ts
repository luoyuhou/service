import { Test, TestingModule } from "@nestjs/testing";
import { UsersLogsController } from "./users-logs.controller";

describe("UsersLogsController", () => {
  let controller: UsersLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersLogsController],
    }).compile();

    controller = module.get<UsersLogsController>(UsersLogsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
