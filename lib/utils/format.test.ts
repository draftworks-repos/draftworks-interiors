import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatINR,
  filterProjects,
  filterJournalArticles,
  validateInquiryForm,
} from './format';

test('formatINR formats currency properly in Indian numbering', () => {
  const result = formatINR(150000);
  assert.match(result, /₹/);
  assert.ok(result.includes('1,50,000'));
  assert.equal(formatINR(NaN), '₹0');
});

test('filterProjects correctly filters by category and search term', () => {
  const sampleProjects = [
    { title: 'The Ivory Residence', category: 'Residential', location: 'Bhopal' },
    { title: 'Modern Earth Villa', category: 'Villa', location: 'Indore' },
    { title: 'The Courtyard House', category: 'Residential', location: 'Bhopal' },
  ];

  // All category (lowercase and capitalized)
  assert.equal(filterProjects(sampleProjects, 'all').length, 3);
  assert.equal(filterProjects(sampleProjects, 'All').length, 3);

  // Category filter
  const villa = filterProjects(sampleProjects, 'Villa');
  assert.equal(villa.length, 1);
  assert.equal(villa[0].title, 'Modern Earth Villa');

  // Search filter
  const bhopalProjects = filterProjects(sampleProjects, 'all', 'bhopal');
  assert.equal(bhopalProjects.length, 2);

  // Combined
  const residentialBhopal = filterProjects(sampleProjects, 'Residential', 'ivory');
  assert.equal(residentialBhopal.length, 1);
  assert.equal(residentialBhopal[0].title, 'The Ivory Residence');
});

test('filterJournalArticles filters by category and title or excerpt', () => {
  const sampleArticles = [
    { title: 'Warm Minimalism', category: 'Philosophy', excerpt: 'Textures that calm the mind' },
    { title: 'Lighting in Architecture', category: 'Lighting', excerpt: 'How dawn and dusk shape spaces' },
  ];

  assert.equal(filterJournalArticles(sampleArticles, 'Lighting').length, 1);
  assert.equal(filterJournalArticles(sampleArticles, 'all', 'textures').length, 1);
});

test('validateInquiryForm validates required fields correctly', () => {
  // Empty data
  const invalid = validateInquiryForm({});
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  // Valid data
  const valid = validateInquiryForm({
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    projectType: 'Residential Interior Design',
    propertyLocation: 'Bhopal, MP',
    estimatedBudget: '₹3,50,000 - ₹7,50,000',
    message: 'We are looking to design our new 4BHK villa with natural limestone and fluted oak.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
