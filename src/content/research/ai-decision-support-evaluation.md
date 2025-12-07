---
title: Evaluating AI-Assisted Clinical Decision Support
description: Rigorous experimental methods for understanding how AI recommendations affect clinician decision-making, accuracy, and behavior in clinical risk assessment.
category: clinical-ai
status: active
featured: true
fundingSources:
  - NIH AIM-AHEAD
collaborators:
  - UNC School of Medicine
startDate: 2023-01-01
---

## Overview

As AI-powered clinical decision support systems proliferate across healthcare, understanding their true impact on clinical decisions becomes critical. This research program uses innovative experimental designs to measure not just whether AI improves accuracy, but *how* it changes the way clinicians process information and make decisions.

Our flagship AugMed platform enables within-subjects randomized controlled trials where the same clinicians evaluate cases with and without AI assistance, controlling for individual variation and isolating the causal effect of AI support.

## Key Research Questions

1. **Does AI assistance improve clinical accuracy?** Using randomized designs with multiple ground truth approaches, we measure the true effect of AI on diagnostic and risk assessment accuracy.

2. **How does AI change clinician information processing?** Through feature randomization designs, we estimate how AI presence affects attention to different clinical factors.

3. **Who benefits most from AI assistance?** By analyzing heterogeneity in AI effects, we identify which clinicians and clinical contexts see the greatest improvements.

4. **What are the risks of over-reliance?** We measure trust calibration and potential automation bias to understand when AI assistance might be harmful.

## Current Projects

### AugMed Within-Subjects RCT
*NIH AIM-AHEAD, 2023-Present*

A large-scale experiment examining how AI assistance affects clinician accuracy in colorectal cancer risk assessment. Key findings include:

- AI reduces accuracy distance (Cohen's d = -0.14, p = 0.008)
- AI increases exact match rates (OR = 1.36, p = 0.015)
- AI fundamentally changes feature weighting patterns
- Effects are strongest for high-risk, complex cases

### Behavioral Mechanisms Study

Using feature randomization methodology, we're identifying exactly which clinical features clinicians delegate to AI versus process independently, with implications for appropriate AI design and training.

### Clinician Typology Analysis

Through cluster analysis of decision-making patterns, we're identifying distinct clinician archetypes in AI response—understanding who benefits most and who may be at risk for over-reliance.

## Methods

Our research employs:

- **Within-subjects RCT designs** for clean causal identification
- **Feature randomization** for causal inference on information processing
- **Multiple ground truth approaches** (EHR-based, consensus-based)
- **Behavioral modeling** including trust calibration estimation
- **Causal forests** for heterogeneous treatment effect analysis
- **Open-source platform development** (AugMed) for reproducible research
