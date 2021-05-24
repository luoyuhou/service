import { Test, TestingModule } from "@nestjs/testing";
import { UsersLogsService } from "./users-logs.service";

describe("UsersLogsService", () => {
  let service: UsersLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersLogsService],
    }).compile();

    service = module.get<UsersLogsService>(UsersLogsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
