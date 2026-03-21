import { describe, it, expect } from 'vitest';
import {
  getProductDescription,
  productImageDescriptions,
} from '../productDescriptions';

describe('productDescriptions', () => {
  describe('productImageDescriptions', () => {
    it('contains descriptions keyed by title', () => {
      expect(productImageDescriptions['65 Roses Classic Crew Unisex']).toBeDefined();
      expect(productImageDescriptions['Health is Hot Hat']).toBeDefined();
    });

    it('contains descriptions keyed by handle', () => {
      expect(productImageDescriptions['65-roses-classic-crew']).toBeDefined();
      expect(productImageDescriptions['health-is-hot-hat']).toBeDefined();
    });
  });

  describe('getProductDescription', () => {
    it('returns exact match by title', () => {
      const desc = getProductDescription('65 Roses Classic Crew Unisex');
      expect(desc).toContain('black crewneck sweatshirt');
    });

    it('returns exact match by handle', () => {
      const desc = getProductDescription('health-is-hot-hat');
      expect(desc).toContain('burgundy corduroy hat');
    });

    it('returns normalized handle match', () => {
      const desc = getProductDescription('Health Is Hot Hat');
      expect(desc).toContain('burgundy corduroy hat');
    });

    it('returns partial match', () => {
      const desc = getProductDescription('65-roses');
      expect(desc).toBeDefined();
      expect(desc).not.toContain('Fight2Breathe product called');
    });

    it('returns fallback for unknown product', () => {
      const desc = getProductDescription('Totally Unknown Product');
      expect(desc).toBe('a Fight2Breathe product called Totally Unknown Product');
    });

    it('handles empty string', () => {
      const desc = getProductDescription('');
      expect(desc).toBeDefined();
    });
  });
});
