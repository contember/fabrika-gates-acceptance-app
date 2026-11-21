-- Whether a note is pinned; nothing reads it yet.
ALTER TABLE notes ADD COLUMN pinned BOOLEAN;
