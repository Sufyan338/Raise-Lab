import mongoose, { Schema, Document } from 'mongoose'

// ─── Member ─────────────────────────────────────────────────────────────────
export interface IMember extends Document {
  name: string
  email: string
  role: string
  avatar?: string
  researchInterests: string[]
  skills: string[]
  github?: string
  linkedin?: string
  publications: number
  joinedAt: Date
  isActive: boolean
}

const MemberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: { type: String, required: true },
    avatar: { type: String },
    researchInterests: [{ type: String }],
    skills: [{ type: String }],
    github: { type: String },
    linkedin: { type: String },
    publications: { type: Number, default: 0 },
    joinedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const Member =
  mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema)

// ─── Project ─────────────────────────────────────────────────────────────────
export interface IProject extends Document {
  title: string
  slug: string
  description: string
  tags: string[]
  status: 'active' | 'completed' | 'published'
  github?: string
  demo?: string
  metrics: { label: string; value: string }[]
  architecture?: string
  dataset?: string
  members: mongoose.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    status: {
      type: String,
      enum: ['active', 'completed', 'published'],
      default: 'active',
    },
    github: { type: String },
    demo: { type: String },
    metrics: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    architecture: { type: String },
    dataset: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
  },
  { timestamps: true }
)

export const Project =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)

// ─── Paper ───────────────────────────────────────────────────────────────────
export interface IPaper extends Document {
  title: string
  authors: string[]
  venue: string
  year: string
  abstract: string
  arxivUrl?: string
  pdfUrl?: string
  citations: number
  tags: string[]
  publishedAt: Date
}

const PaperSchema = new Schema<IPaper>(
  {
    title: { type: String, required: true },
    authors: [{ type: String }],
    venue: { type: String, required: true },
    year: { type: String, required: true },
    abstract: { type: String },
    arxivUrl: { type: String },
    pdfUrl: { type: String },
    citations: { type: Number, default: 0 },
    tags: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const Paper =
  mongoose.models.Paper || mongoose.model<IPaper>('Paper', PaperSchema)

// ─── Achievement ─────────────────────────────────────────────────────────────
export interface IAchievement extends Document {
  year: string
  month: string
  title: string
  description: string
  tags: string[]
  color: 'cyan' | 'purple'
  date: Date
}

const AchievementSchema = new Schema<IAchievement>(
  {
    year: { type: String, required: true },
    month: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    color: { type: String, enum: ['cyan', 'purple'], default: 'cyan' },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const Achievement =
  mongoose.models.Achievement || mongoose.model<IAchievement>('Achievement', AchievementSchema)

// ─── CommunityApplication ────────────────────────────────────────────────────
export interface IApplication extends Document {
  name: string
  email: string
  university: string
  researchInterests: string[]
  github?: string
  motivation: string
  cvUrl?: string
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected'
  submittedAt: Date
}

const ApplicationSchema = new Schema<IApplication>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    university: { type: String, required: true },
    researchInterests: [{ type: String }],
    github: { type: String },
    motivation: { type: String, required: true },
    cvUrl: { type: String },
    status: {
      type: String,
      enum: ['pending', 'reviewing', 'accepted', 'rejected'],
      default: 'pending',
    },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const Application =
  mongoose.models.Application ||
  mongoose.model<IApplication>('Application', ApplicationSchema)

// ─── BlogPost ────────────────────────────────────────────────────────────────
export interface IBlogPost extends Document {
  title: string
  slug: string
  excerpt: string
  content: string
  author: mongoose.Types.ObjectId
  tags: string[]
  category: string
  readTime: string
  featured: boolean
  publishedAt: Date
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String },
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'Member' },
    tags: [{ type: String }],
    category: { type: String },
    readTime: { type: String },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const BlogPost =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)

// ─── Certification ───────────────────────────────────────────────────────────
export interface ICertification extends Document {
  title: string
  org: string
  date: string
  category: string
  level: string
  member: mongoose.Types.ObjectId
  verified: boolean
  url?: string
  color: 'cyan' | 'purple'
}

const CertificationSchema = new Schema<ICertification>(
  {
    title: { type: String, required: true },
    org: { type: String, required: true },
    date: { type: String },
    category: { type: String },
    level: { type: String },
    member: { type: Schema.Types.ObjectId, ref: 'Member' },
    verified: { type: Boolean, default: false },
    url: { type: String },
    color: { type: String, enum: ['cyan', 'purple'], default: 'cyan' },
  },
  { timestamps: true }
)

export const Certification =
  mongoose.models.Certification ||
  mongoose.model<ICertification>('Certification', CertificationSchema)

// ─── ContactMessage ──────────────────────────────────────────────────────────
export interface IContactMessage extends Document {
  name: string
  email: string
  subject?: string
  message: string
  read: boolean
  createdAt: Date
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema)
