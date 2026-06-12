export interface SafetyAlert {
  severity: string;
  title: string;
  message: string;
}

export function evaluateSafety(
  patientMedications: string[],
  interactions: any[]
): SafetyAlert[] {
  const alerts: SafetyAlert[] = [];

  for (const interaction of interactions) {
    const drugA = interaction.drug_a_name?.toLowerCase();
    const drugB = interaction.drug_b_name?.toLowerCase();

    const hasDrugA = patientMedications.some(
      (med) => med.toLowerCase().includes(drugA)
    );

    const hasDrugB = patientMedications.some(
      (med) => med.toLowerCase().includes(drugB)
    );

    if (hasDrugA && hasDrugB) {
      alerts.push({
        severity: interaction.severity,
        title: "Drug Interaction Alert",
        message: `${interaction.clinical_effect}. Management: ${interaction.management}`,
      });
    }
  }

  if (alerts.length === 0) {
    alerts.push({
      severity: "LOW",
      title: "No Critical Interactions",
      message:
        "No major drug interaction detected for current medications.",
    });
  }

  return alerts;
}