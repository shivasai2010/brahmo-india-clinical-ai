export interface SafetyAlert {
  severity: string;
  title: string;
  message: string;
}

export function evaluateSafety(
  selectedDrugIds: number[],
  interactions: any[]
): SafetyAlert[] {
  const alerts: SafetyAlert[] = [];

  for (const interaction of interactions) {
    const drugAFound = selectedDrugIds.includes(
      interaction.drug_a_id
    );

    const drugBFound = selectedDrugIds.includes(
      interaction.drug_b_id
    );

    if (drugAFound && drugBFound) {
      alerts.push({
        severity: interaction.severity,
        title: "Drug Interaction Alert",
        message:
          interaction.clinical_effect +
          " | " +
          interaction.management,
      });
    }
  }

  return alerts;
}