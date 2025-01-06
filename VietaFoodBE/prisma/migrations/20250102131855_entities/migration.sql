BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Admin] (
    [adminKey] VARCHAR(255) NOT NULL,
    [fullName] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(255) NOT NULL,
    [password] NVARCHAR(255) NOT NULL,
    CONSTRAINT [PK__Admin__586B4031F438AA59] PRIMARY KEY CLUSTERED ([adminKey])
);

-- CreateTable
CREATE TABLE [dbo].[Coupon] (
    [couponKey] VARCHAR(255) NOT NULL,
    [couponCode] VARCHAR(255),
    [description] NVARCHAR(255) NOT NULL,
    [discountPercentage] FLOAT(53) NOT NULL,
    [numOfUses] INT NOT NULL,
    [expiredDate] DATETIME NOT NULL,
    [createdBy] VARCHAR(255) NOT NULL,
    [createdDate] DATETIME NOT NULL,
    [status] TINYINT NOT NULL,
    CONSTRAINT [PK__Coupon__592794AC94BB37FA] PRIMARY KEY CLUSTERED ([couponKey]),
    CONSTRAINT [UQ__Coupon__1D19F4DA509A2899] UNIQUE NONCLUSTERED ([couponCode])
);

-- CreateTable
CREATE TABLE [dbo].[CustomerInformation] (
    [customerInfoKey] VARCHAR(255) NOT NULL,
    [name] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(255),
    [address] NVARCHAR(255) NOT NULL,
    [phone] NVARCHAR(20) NOT NULL,
    CONSTRAINT [PK__Customer__B949C15FE012C661] PRIMARY KEY CLUSTERED ([customerInfoKey])
);

-- CreateTable
CREATE TABLE [dbo].[Order] (
    [orderKey] VARCHAR(255) NOT NULL,
    [customerInfoKey] VARCHAR(255),
    [couponKey] VARCHAR(255),
    [createdAt] DATETIME NOT NULL,
    [totalPrice] DECIMAL(10,2) NOT NULL,
    [status] TINYINT NOT NULL,
    [imgUrl] NVARCHAR(255),
    CONSTRAINT [PK__Order__594FCFFB5F2B7ED4] PRIMARY KEY CLUSTERED ([orderKey])
);

-- CreateTable
CREATE TABLE [dbo].[OrderDetail] (
    [orderDetailKey] VARCHAR(255) NOT NULL,
    [productKey] VARCHAR(255),
    [orderKey] VARCHAR(255),
    [quantity] INT,
    [actualPrice] FLOAT(53) NOT NULL,
    CONSTRAINT [PK__OrderDet__34730B90719965DF] PRIMARY KEY CLUSTERED ([orderDetailKey])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [productKey] VARCHAR(255) NOT NULL,
    [name] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(255) NOT NULL,
    [guildToUsing] NVARCHAR(255) NOT NULL,
    [weight] NVARCHAR(20) NOT NULL,
    [expiryDay] NVARCHAR(50) NOT NULL,
    [price] FLOAT(53) NOT NULL,
    [imageURL] NVARCHAR(255) NOT NULL,
    [quantity] INT NOT NULL,
    [status] TINYINT NOT NULL,
    CONSTRAINT [PK__Product__1E79644A47BB427A] PRIMARY KEY CLUSTERED ([productKey])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B61E9776B72] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

-- AddForeignKey
ALTER TABLE [dbo].[Coupon] ADD CONSTRAINT [FK__Coupon__createdB__29572725] FOREIGN KEY ([createdBy]) REFERENCES [dbo].[Admin]([adminKey]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [FK__Order__couponKey__2F10007B] FOREIGN KEY ([couponKey]) REFERENCES [dbo].[Coupon]([couponKey]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [FK__Order__customerI__2E1BDC42] FOREIGN KEY ([customerInfoKey]) REFERENCES [dbo].[CustomerInformation]([customerInfoKey]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK__OrderDeta__order__32E0915F] FOREIGN KEY ([orderKey]) REFERENCES [dbo].[Order]([orderKey]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK__OrderDeta__produ__31EC6D26] FOREIGN KEY ([productKey]) REFERENCES [dbo].[Product]([productKey]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
