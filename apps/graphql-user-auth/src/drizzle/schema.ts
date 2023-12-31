import { serial, text, timestamp, pgTable, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  hashedPassword: text('hashedPassword'),

  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});

export const usersRelations = relations(users, ({ one }) => ({
  authInfo: one(authInfo, {
    fields: [users.id],
    references: [authInfo.userId],
  }),
}));

export const authInfo = pgTable('auth_info', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  hashedAccessToken: text('hashed_access_token'),
});
