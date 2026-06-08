export interface SafetyAlert {
  severity: string;
  title: string;
  message: string;
}

export function evaluateSafety(
  medications: string[],
  interactions: any[]
): SafetyAlert[] {
  const alerts: SafetyAlert[] = [];

  for (const interaction of interactions) {
    const hasDrugA = medications.includes(interaction.drug_a);
    const hasDrugB = medications.includes(interaction.drug_b);

    if (hasDrugA && hasDrugB) {
      alerts.push({
        severity: interaction.severity,
        title: "Drug Interaction",
        message: `${interaction.clinical_effect}. ${interaction.management}`
      });
    }
  }

  return alerts;
}