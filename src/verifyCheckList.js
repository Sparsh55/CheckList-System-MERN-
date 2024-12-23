import { checklistRules } from './checklist.js';

export const verifyChecklist = (data) => {
  return checklistRules.map(rule => ({
    rule: rule.name,
    passed: rule.condition(data),
  }));
};
