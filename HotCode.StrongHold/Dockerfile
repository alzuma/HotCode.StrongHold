#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["HotCode.StrongHold/HotCode.StrongHold.csproj", "HotCode.StrongHold/"]
RUN dotnet restore "HotCode.StrongHold/HotCode.StrongHold.csproj"
COPY . .
WORKDIR "/src/HotCode.StrongHold.Tests"
RUN dotnet test
WORKDIR "/src/HotCode.StrongHold"
RUN dotnet build "HotCode.StrongHold.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HotCode.StrongHold.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HotCode.StrongHold.dll"]