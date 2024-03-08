import { ConvexError, v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { getUser } from './users'

export const generateUploadUrl = mutation(async ctx => {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new ConvexError('You must be logined in to upload files.')
  }
  return await ctx.storage.generateUploadUrl()
})

export const createFile = mutation({
  args: {
    name: v.string(),
    fileId: v.id('_storage'),
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new ConvexError('You must be logined in to upload files.')
    }
    const user = await getUser(ctx, identity.tokenIdentifier)
    await ctx.db.insert('files', {
      name: args.name,
      orgId: args.orgId,
      fileId: args.fileId,
    })
  },
})

export const getFiles = query({
  args: {
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity()

    console.log(identity?.tokenIdentifier)
    if (!identity) return []
    return await ctx.db
      .query('files')
      .withIndex('by_orgId', q => q.eq('orgId', args.orgId))
      .collect()
  },
})
