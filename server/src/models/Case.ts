import mongoose, { Schema } from 'mongoose';

const SuspectSchema = new Schema({ id: { type: String, required: true }, name: String, age: Number, occupation: String, relationship: String, background: String, avatar: String }, { _id: false });
const EvidenceSchema = new Schema({ id: { type: String, required: true }, category: String, title: String, description: String, content: Schema.Types.Mixed, timestamp: String, location: String, relatedSuspects: [String], clue: String }, { _id: false });
const CaseSchema = new Schema({
  caseId: { type: String, unique: true, required: true }, sessionId: { type: String, required: true, index: true }, title: String, scenario: String, category: String, difficulty: String,
  incident: String, location: String, incidentAt: String, status: { type: String, default: 'investigating' }, suspects: [SuspectSchema], evidence: [EvidenceSchema], timeline: [Schema.Types.Mixed],
  culpritId: String, motive: String, method: String, solution: String, criticalClues: [String], redHerrings: [String], accusation: { suspectId: String, submittedAt: Date }, notes: { type: String, default: '' }, createdAt: { type: Date, default: Date.now }
}, { timestamps: true });
export const CaseModel = mongoose.model('Case', CaseSchema);
