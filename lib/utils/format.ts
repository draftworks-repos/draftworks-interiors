/**
 * Utility functions for DraftWorks Interiors
 */

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  propertyLocation: string;
  approxArea: string;
  estimatedBudget: string;
  expectedStartDate: string;
  message: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  propertyLocation?: string;
  approxArea?: string;
  estimatedBudget?: string;
  message?: string;
}

/**
 * Format a number into Indian Rupee currency format (e.g. ₹1,50,000)
 */
export function formatINR(amount: number): string {
  if (isNaN(amount)) return '₹0';
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
}

/**
 * Filter projects by category and optional search term
 */
export function filterProjects<T extends { category: string; title: string; location: string }>(
  projects: T[],
  selectedCategory: string,
  searchQuery: string = ''
): T[] {
  const query = searchQuery.trim().toLowerCase();
  const categoryFilter = selectedCategory.trim().toLowerCase();
  return projects.filter((project) => {
    const matchesCategory =
      categoryFilter === 'all' ||
      categoryFilter === '' ||
      project.category.toLowerCase() === categoryFilter;

    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

/**
 * Filter journal articles by category and search term
 */
export function filterJournalArticles<T extends { category: string; title: string; excerpt: string }>(
  articles: T[],
  selectedCategory: string,
  searchQuery: string = ''
): T[] {
  const query = searchQuery.trim().toLowerCase();
  const categoryFilter = selectedCategory.trim().toLowerCase();
  return articles.filter((article) => {
    const matchesCategory =
      categoryFilter === 'all' ||
      categoryFilter === '' ||
      article.category.toLowerCase() === categoryFilter;

    const matchesSearch =
      query === '' ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

/**
 * Validate inquiry form
 */
export function validateInquiryForm(data: Partial<InquiryFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Indian phone number or standard phone (at least 10 digits)
  const phoneDigits = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || phoneDigits.length < 10) {
    errors.phone = 'Please provide a valid 10-digit phone number.';
  }

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project type.';
  }

  if (!data.propertyLocation || data.propertyLocation.trim().length < 2) {
    errors.propertyLocation = 'Please provide the property city or location.';
  }

  if (!data.estimatedBudget || data.estimatedBudget.trim() === '') {
    errors.estimatedBudget = 'Please select your estimated budget range.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a brief description of your vision (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
