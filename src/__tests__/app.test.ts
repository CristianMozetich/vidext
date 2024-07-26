import { appRouter } from "@/server"; 
import { getTldraw, updateTldraw } from "@/server/db"; 

jest.mock('@/server/db', () => ({
  getTldraw: jest.fn(),
  updateTldraw: jest.fn(),
}));

describe('appRouter', () => {
  const caller = appRouter.createCaller({});

  describe('getTldraw', () => {
    it('should return data from getTldraw', async () => {
      const mockData = { data: 'data' };
      (getTldraw as jest.Mock).mockResolvedValue(mockData);

     
      const result = await caller.getTldraw();

      expect(result).toEqual(mockData);
      expect(getTldraw).toHaveBeenCalled();
    });
  });

  describe('updateTldraw', () => {
    it('should updateTldraw', async () => {
      const inputData = { data: 'data' };
      (updateTldraw as jest.Mock).mockResolvedValue(inputData);

      
      const result = await caller.updateTldraw({ data: 'data' });

      expect(result).toEqual(inputData);
      expect(updateTldraw).toHaveBeenCalledWith({ data: 'data' });
    });
  });
});
