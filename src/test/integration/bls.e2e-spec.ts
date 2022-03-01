import { Test } from "@nestjs/testing";
import { BlsService } from "../../endpoints/bls/bls.service";
import { PublicAppModule } from "src/public.app.module";

describe('Bls Service', () => {
  let blsService: BlsService;
  const blsValue = '03fb3a66ff74935c1d0531b47e98d5d90fcf51133dbd8e9db583e11a6f579735e6a673cd4d1ad2c9cb3e8d9f614bdb0ba5c21b20863a83e22fbd72231186026f32b91b9c8a49db41934db4ae0fdbe7ce89b3d84469ca45067ef152fe5c233118';

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PublicAppModule],
    }).compile();

    blsService = moduleRef.get<BlsService>(BlsService);
  });

  describe('Get Bls Index', () => {
    it('should return bls index', async () => {
      const indexValue = await blsService.getBlsIndex(blsValue, 1, 100);
      expect(typeof indexValue).toBe('number');
    });
  });

  describe('Get Public Keys', () => {
    it('should return public keys from shard 1', async () => {
      const publicKeys = await blsService.getPublicKeys(1, 100);
      expect(publicKeys).toBeInstanceOf(Array);

      for (const key of publicKeys) {
        expect(typeof key).toBe('string');
      }
    });

    it('should return empty array', async () => {
      const emptyKey = await blsService.getPublicKeys(3, 100);
      expect(emptyKey).toEqual([]);
    });
  });
});