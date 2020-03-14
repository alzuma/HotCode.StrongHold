USE [RBAC]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

---[dbo].[RoleContext]--------------------------------------------------------------------------------------------------
CREATE TABLE [dbo].[RoleContext]
(
    [id]          [varchar](36)    NOT NULL,
    [name]        [nvarchar](512)  NOT NULL,
    [description] [nvarchar](max)  NOT NULL,
    [created]     [numeric](11, 0) NOT NULL,
    [createdBy]   [varchar](36)    NOT NULL,
    [modified]    [numeric](11, 0) NOT NULL,
    [modifiedBy]  [varchar](36)    NOT NULL,
    CONSTRAINT [PK_RoleContext] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


---[dbo].[Role] --------------------------------------------------------------------------------------------------------
CREATE TABLE [dbo].[Role]
(
    [id]            [varchar](36)    NOT NULL,
    [parentId]      [varchar](36)    NULL,
    [name]          [nvarchar](512)  NOT NULL,
    [description]   [nvarchar](max)  NOT NULL,
    [roleContextId] [varchar](36)    NOT NULL,
    [created]       [numeric](11, 0) NOT NULL,
    [createdBy]     [varchar](36)    NOT NULL,
    [modified]      [numeric](11, 0) NOT NULL,
    [modifiedBy]    [varchar](36)    NOT NULL,
    CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

---[dbo].[Permission] --------------------------------------------------------------------------------------------------
CREATE TABLE [dbo].[Permission]
(
    [id]          [varchar](36)    NOT NULL,
    [name]        [nvarchar](512)  NOT NULL,
    [description] [nvarchar](max)  NOT NULL,
    [created]     [numeric](11, 0) NOT NULL,
    [createdBy]   [varchar](36)    NOT NULL,
    [modified]    [numeric](11, 0) NOT NULL,
    [modifiedBy]  [varchar](36)    NOT NULL,
    CONSTRAINT [PK_Permission] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

--- [dbo].[RoleHasPermission] ------------------------------------------------------------------------------------------
CREATE TABLE [dbo].[RoleHasPermission]
(
    [id]           [varchar](36)    NOT NULL,
    [roleId]       [varchar](36)    NOT NULL,
    [permissionId] [varchar](36)    NOT NULL,
    [created]      [numeric](11, 0) NOT NULL,
    [createdBy]    [varchar](36)    NOT NULL,
    [modified]     [numeric](11, 0) NOT NULL,
    [modifiedBy]   [varchar](36)    NOT NULL,
    CONSTRAINT [PK_RoleHasPermission] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--- [dbo].[Operation] --------------------------------------------------------------------------------------------------
CREATE TABLE [dbo].[Operation]
(
    [id]          [varchar](36)    NOT NULL,
    [name]        [nvarchar](512)  NOT NULL,
    [description] [nvarchar](max)  NULL,
    [created]     [numeric](11, 0) NOT NULL,
    [createdBy]   [varchar](36)    NOT NULL,
    [modified]    [numeric](11, 0) NOT NULL,
    [modifiedBy]  [varchar](36)    NOT NULL,
    CONSTRAINT [PK_Operation] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

--- [dbo].[PermissionHasOperation] -------------------------------------------------------------------------------------
CREATE TABLE [dbo].[PermissionHasOperation]
(
    [id]           [varchar](36)    NOT NULL,
    [permissionId] [varchar](36)    NOT NULL,
    [operationId]  [varchar](36)    NOT NULL,
    [created]      [numeric](11, 0) NOT NULL,
    [createdBy]    [varchar](36)    NOT NULL,
    [modified]     [numeric](11, 0) NOT NULL,
    [modifiedBy]   [varchar](36)    NOT NULL,
    CONSTRAINT [PK_PermissionHasOperation] PRIMARY KEY CLUSTERED
        (
         [id] ASC
            ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--- populate tables-----------------------------------------------------------------------------------------------------

--- dbo.[RoleContext] --------------------------------------------------------------------------------------------------
declare @utcTimeStamp int = DATEDIFF(s, '1970-01-01', GETUTCDATE());
declare @uid varchar(36) = '00000000-0000-0000-0000-000000000000';
declare @utcTimeStampEmpty int = -1;

insert into dbo.[RoleContext]
    (id, name, description, created, createdBy, modified, modifiedBy)
values (@uid,
        'Empty Context',
        'Empty Context',
        @utcTimeStamp,
        @uid,
        @utcTimeStampEmpty,
        @uid)
GO

--- dbo.[Role] ---------------------------------------------------------------------------------------------------------
declare @utcTimeStamp int = DATEDIFF(s, '1970-01-01', GETUTCDATE());
declare @uid varchar(36) = '00000000-0000-0000-0000-000000000000';
declare @utcTimeStampEmpty int = -1;

insert into dbo.[Role]
(id, parentId, [name], description, roleContextId, created, createdBy, modified, modifiedBy)
values (@uid, NULL, 'Empty Role', 'Empty Role', @uid, @utcTimeStamp, @uid, @utcTimeStamp, @utcTimeStampEmpty)
GO

declare @utcTimeStamp int = DATEDIFF(s, '1970-01-01', GETUTCDATE());
declare @uid varchar(36) = '00000000-0000-0000-0000-000000000000';
declare @utcTimeStampEmpty int = -1;
declare @pk varchar(36) = '9f0aa4d9-b780-4807-aebe-425a66d90a52';

insert into dbo.[Role]
(id, parentId, [name], description, roleContextId, created, createdBy, modified, modifiedBy)
values (@pk, NULL, 'Root role', 'Root Role', @uid, @utcTimeStamp, @uid, @utcTimeStamp, @utcTimeStampEmpty)
GO