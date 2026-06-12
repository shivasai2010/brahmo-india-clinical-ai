# BRAHMO India Clinical AI Assistant

## Live Demo
https://brahmo-india-clinical-ai.vercel.app

---

## Overview

BRAHMO India Clinical AI Assistant is a **clinical decision support web application** built using Next.js and AI.

It is designed to assist doctors and healthcare professionals by providing **fast, AI-powered clinical guidance** for common medical conditions such as:

- Type 2 Diabetes
- Chronic Kidney Disease (CKD)
- Heart Failure
- General drug safety decisions

The system uses **Google Gemini AI** to generate clinical insights and combines it with structured medical workflows to improve decision-making speed and safety.

This project simulates a real-world **hospital assistant system** that can support doctors in outpatient and inpatient environments.

---

## Key Objectives of the Project

- Reduce time required for clinical decision support
- Provide quick drug safety checks (especially in CKD and comorbid conditions)
- Assist doctors with standard treatment guidelines
- Improve access to structured clinical knowledge using AI
- Demonstrate a scalable AI healthcare assistant system

---

## Features

### 1. AI Clinical Chat Assistant
- Doctors can ask clinical questions
- AI responds with structured medical guidance
- Supports conditions like diabetes, CKD, HF

### 2. Patient Profile Management
- Store and manage patient-related clinical context
- Helps simulate real hospital workflow

### 3. Drug Formulary Support
- Provides drug-related recommendations
- Helps understand safe usage conditions

### 4. Clinical Safety Alerts
- Highlights risks in conditions like:
  - CKD (Kidney impairment)
  - Heart Failure
  - Drug contraindications

### 5. AI Integration
- Powered by **Google Gemini AI**
- Generates clinical reasoning-based responses

### 6. Backend Integration
- Supabase used for database and backend services
- Supports scalable data handling

---

## Example Clinical Queries Supported

- “What is the first-line treatment for Type 2 Diabetes?”
- “What is the HbA1c target for most adults?”
- “Is Metformin safe in CKD patients?”
- “How should diabetes be managed in heart failure patients?”

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Google Gemini AI
- Supabase (Database & Backend)
- Vercel (Deployment)

---

## Project Architecture

Frontend (Next.js)
        ↓
Clinical Chat UI
        ↓
API Routes (Backend Logic)
        ↓
Google Gemini AI (Clinical Intelligence Engine)
        ↓
Supabase (Database & Patient Data Storage)

---

## Getting Started (Run Locally)

### 1. Install dependencies
```bash
npm install
